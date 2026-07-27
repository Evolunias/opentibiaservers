import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-server');
}

export default function HighrateAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-server" />;
}
