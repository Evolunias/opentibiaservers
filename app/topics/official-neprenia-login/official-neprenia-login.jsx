import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-login');
}

export default function OfficialNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-login" />;
}
