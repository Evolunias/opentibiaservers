import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-register');
}

export default function OfficialNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-register" />;
}
