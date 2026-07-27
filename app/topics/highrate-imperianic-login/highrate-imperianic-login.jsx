import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-login');
}

export default function HighrateImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-login" />;
}
