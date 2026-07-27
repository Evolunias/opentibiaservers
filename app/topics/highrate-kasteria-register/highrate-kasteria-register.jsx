import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-register');
}

export default function HighrateKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-register" />;
}
