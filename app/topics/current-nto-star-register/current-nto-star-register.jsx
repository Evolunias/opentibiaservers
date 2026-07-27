import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-register');
}

export default function CurrentNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-register" />;
}
