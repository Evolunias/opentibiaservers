import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-register');
}

export default function OfficialNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-register" />;
}
