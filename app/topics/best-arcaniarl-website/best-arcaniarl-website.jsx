import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-website');
}

export default function BestArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-website" />;
}
