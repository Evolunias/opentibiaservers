import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-login');
}

export default function HighrateKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-login" />;
}
