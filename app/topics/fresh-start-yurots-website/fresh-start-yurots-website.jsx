import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-website');
}

export default function FreshStartYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-website" />;
}
