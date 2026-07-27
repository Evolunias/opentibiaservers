import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-website');
}

export default function CurrentRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-website" />;
}
