import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-website');
}

export default function FreshStartClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-website" />;
}
