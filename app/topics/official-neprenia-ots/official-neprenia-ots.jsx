import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-ots');
}

export default function OfficialNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-ots" />;
}
