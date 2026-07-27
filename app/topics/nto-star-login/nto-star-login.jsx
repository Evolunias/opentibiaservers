import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-login');
}

export default function NtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="nto-star-login" />;
}
