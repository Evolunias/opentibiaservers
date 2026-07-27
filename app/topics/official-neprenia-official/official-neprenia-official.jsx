import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-official');
}

export default function OfficialNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-official" />;
}
