import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-website');
}

export default function ActiveRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-website" />;
}
