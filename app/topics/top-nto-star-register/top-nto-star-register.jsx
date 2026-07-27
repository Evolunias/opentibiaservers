import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-register');
}

export default function TopNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-register" />;
}
