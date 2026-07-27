import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-ots');
}

export default function HighrateKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-ots" />;
}
