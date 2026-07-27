import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-ot-server');
}

export default function OfficialNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-ot-server" />;
}
