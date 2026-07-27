import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-website');
}

export default function VenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="venoreot-website" />;
}
