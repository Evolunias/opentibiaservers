import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-private-server');
}

export default function HighrateClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-private-server" />;
}
