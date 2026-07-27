import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-login');
}

export default function CustomNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-login" />;
}
