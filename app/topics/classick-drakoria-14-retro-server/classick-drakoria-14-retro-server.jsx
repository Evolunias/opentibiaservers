import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-retro-server');
}

export default function ClassickDrakoria14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-retro-server" />;
}
