import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-website');
}

export default function PopularSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-website" />;
}
