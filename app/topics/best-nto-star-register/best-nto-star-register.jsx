import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-register');
}

export default function BestNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-register" />;
}
