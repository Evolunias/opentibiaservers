import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-ot-server');
}

export default function BestArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-ot-server" />;
}
