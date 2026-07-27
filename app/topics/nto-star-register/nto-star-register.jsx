import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-register');
}

export default function NtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="nto-star-register" />;
}
