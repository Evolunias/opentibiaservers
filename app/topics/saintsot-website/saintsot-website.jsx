import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-website');
}

export default function SaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="saintsot-website" />;
}
