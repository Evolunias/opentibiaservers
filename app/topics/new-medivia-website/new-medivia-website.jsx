import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-website');
}

export default function NewMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-website" />;
}
