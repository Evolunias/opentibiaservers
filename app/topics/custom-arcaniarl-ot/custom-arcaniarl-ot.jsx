import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-ot');
}

export default function CustomArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-ot" />;
}
