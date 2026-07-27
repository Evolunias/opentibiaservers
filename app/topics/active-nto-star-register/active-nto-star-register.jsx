import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-register');
}

export default function ActiveNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-register" />;
}
