import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-website');
}

export default function BestSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-website" />;
}
