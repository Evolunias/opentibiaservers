import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-website');
}

export default function FreshStartSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-website" />;
}
