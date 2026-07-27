import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-website');
}

export default function OfficialMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-website" />;
}
