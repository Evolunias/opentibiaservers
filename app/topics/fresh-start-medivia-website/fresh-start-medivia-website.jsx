import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-website');
}

export default function FreshStartMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-website" />;
}
