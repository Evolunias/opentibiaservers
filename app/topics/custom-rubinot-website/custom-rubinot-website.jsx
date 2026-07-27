import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-website');
}

export default function CustomRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-website" />;
}
