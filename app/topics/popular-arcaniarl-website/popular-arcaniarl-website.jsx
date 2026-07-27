import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-website');
}

export default function PopularArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-website" />;
}
