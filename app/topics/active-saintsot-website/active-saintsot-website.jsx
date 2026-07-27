import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-website');
}

export default function ActiveSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-website" />;
}
