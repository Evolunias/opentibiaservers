import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-website');
}

export default function TopYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-website" />;
}
