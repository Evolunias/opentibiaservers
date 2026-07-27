import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-website');
}

export default function FreshStartArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-website" />;
}
