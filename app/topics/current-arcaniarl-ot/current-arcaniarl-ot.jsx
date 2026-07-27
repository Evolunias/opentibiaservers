import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-ot');
}

export default function CurrentArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-ot" />;
}
