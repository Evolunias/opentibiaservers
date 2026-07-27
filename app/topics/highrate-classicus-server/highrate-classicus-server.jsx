import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-server');
}

export default function HighrateClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-server" />;
}
