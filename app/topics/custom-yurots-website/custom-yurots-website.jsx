import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-website');
}

export default function CustomYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-website" />;
}
