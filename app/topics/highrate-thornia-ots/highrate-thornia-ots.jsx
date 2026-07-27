import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-ots');
}

export default function HighrateThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-ots" />;
}
