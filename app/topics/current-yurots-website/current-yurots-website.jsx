import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-website');
}

export default function CurrentYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-website" />;
}
