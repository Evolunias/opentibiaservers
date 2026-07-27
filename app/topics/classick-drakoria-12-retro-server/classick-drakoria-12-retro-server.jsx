import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-retro-server');
}

export default function ClassickDrakoria12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-retro-server" />;
}
