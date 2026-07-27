import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-retro-server');
}

export default function ClassickDrakoria854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-retro-server" />;
}
