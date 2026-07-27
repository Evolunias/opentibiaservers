import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-login');
}

export default function ActiveNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-login" />;
}
