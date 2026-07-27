import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-login');
}

export default function HighrateThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-login" />;
}
