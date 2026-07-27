import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-private-server');
}

export default function HighrateAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-private-server" />;
}
