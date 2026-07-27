import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-login');
}

export default function NewNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-login" />;
}
