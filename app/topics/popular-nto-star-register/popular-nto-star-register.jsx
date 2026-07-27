import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-register');
}

export default function PopularNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-register" />;
}
