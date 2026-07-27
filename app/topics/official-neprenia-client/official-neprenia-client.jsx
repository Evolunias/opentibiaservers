import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-client');
}

export default function OfficialNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-client" />;
}
