import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-website');
}

export default function LowrateMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-website" />;
}
