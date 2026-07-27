import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-retro-server');
}

export default function ClassickDrakoria11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-retro-server" />;
}
