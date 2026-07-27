import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-website');
}

export default function BestMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-website" />;
}
