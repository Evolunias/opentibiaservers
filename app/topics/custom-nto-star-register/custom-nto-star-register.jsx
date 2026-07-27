import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-register');
}

export default function CustomNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-register" />;
}
