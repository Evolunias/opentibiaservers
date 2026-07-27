import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-ot');
}

export default function OfficialNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-ot" />;
}
