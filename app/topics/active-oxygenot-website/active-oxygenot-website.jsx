import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-website');
}

export default function ActiveOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-website" />;
}
