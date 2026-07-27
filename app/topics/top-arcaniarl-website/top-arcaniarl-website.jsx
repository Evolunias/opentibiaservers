import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-website');
}

export default function TopArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-website" />;
}
