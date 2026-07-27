import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-website');
}

export default function ActiveMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-website" />;
}
