import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-website');
}

export default function CustomSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-website" />;
}
