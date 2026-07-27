import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-website');
}

export default function RubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="rubinot-website" />;
}
