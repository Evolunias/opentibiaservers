import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-register');
}

export default function NewNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-register" />;
}
