import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-ot');
}

export default function PopularArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-ot" />;
}
