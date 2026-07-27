import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-client');
}

export default function HighrateAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-client" />;
}
