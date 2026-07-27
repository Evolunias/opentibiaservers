import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-ots');
}

export default function PopularArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-ots" />;
}
