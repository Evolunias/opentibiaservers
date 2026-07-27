import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-website');
}

export default function CustomOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-website" />;
}
