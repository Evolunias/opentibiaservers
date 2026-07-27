import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-retro-server');
}

export default function ClassickDrakoria13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-retro-server" />;
}
