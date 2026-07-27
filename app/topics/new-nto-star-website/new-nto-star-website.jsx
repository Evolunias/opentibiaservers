import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-website');
}

export default function NewNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-website" />;
}
