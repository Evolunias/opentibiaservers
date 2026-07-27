import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-website');
}

export default function CustomMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-website" />;
}
