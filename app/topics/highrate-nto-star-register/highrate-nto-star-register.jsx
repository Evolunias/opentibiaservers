import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-register');
}

export default function HighrateNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-register" />;
}
