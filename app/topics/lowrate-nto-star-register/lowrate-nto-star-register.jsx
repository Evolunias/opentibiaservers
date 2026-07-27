import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-register');
}

export default function LowrateNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-register" />;
}
