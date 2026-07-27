import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-login');
}

export default function HighrateClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-login" />;
}
