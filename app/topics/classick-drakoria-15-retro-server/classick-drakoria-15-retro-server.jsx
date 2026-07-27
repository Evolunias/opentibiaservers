import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-retro-server');
}

export default function ClassickDrakoria15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-retro-server" />;
}
