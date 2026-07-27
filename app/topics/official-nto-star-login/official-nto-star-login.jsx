import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-login');
}

export default function OfficialNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-login" />;
}
