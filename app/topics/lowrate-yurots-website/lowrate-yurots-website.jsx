import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-website');
}

export default function LowrateYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-website" />;
}
