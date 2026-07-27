import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-ots');
}

export default function HighrateClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-ots" />;
}
