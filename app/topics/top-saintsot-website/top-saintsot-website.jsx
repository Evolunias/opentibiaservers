import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-website');
}

export default function TopSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-website" />;
}
