import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-server');
}

export default function HighrateImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-server" />;
}
