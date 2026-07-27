import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-website');
}

export default function MediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="medivia-website" />;
}
