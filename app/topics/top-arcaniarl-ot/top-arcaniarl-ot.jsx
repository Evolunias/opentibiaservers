import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-ot');
}

export default function TopArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-ot" />;
}
