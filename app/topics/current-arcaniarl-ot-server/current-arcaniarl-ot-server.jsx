import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-ot-server');
}

export default function CurrentArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-ot-server" />;
}
