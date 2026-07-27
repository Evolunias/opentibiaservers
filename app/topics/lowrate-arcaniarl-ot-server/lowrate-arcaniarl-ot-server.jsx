import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-ot-server');
}

export default function LowrateArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-ot-server" />;
}
