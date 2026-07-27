import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-client');
}

export default function HighrateClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-client" />;
}
