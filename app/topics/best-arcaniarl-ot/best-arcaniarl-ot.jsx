import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-ot');
}

export default function BestArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-ot" />;
}
