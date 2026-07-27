import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-server');
}

export default function OfficialNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-server" />;
}
