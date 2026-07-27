import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-login');
}

export default function LowrateNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-login" />;
}
