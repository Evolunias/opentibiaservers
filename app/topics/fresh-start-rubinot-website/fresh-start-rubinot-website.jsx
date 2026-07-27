import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-website');
}

export default function FreshStartRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-website" />;
}
