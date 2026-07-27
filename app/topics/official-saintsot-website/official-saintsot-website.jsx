import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-website');
}

export default function OfficialSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-website" />;
}
