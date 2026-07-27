import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-website');
}

export default function NewRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-website" />;
}
