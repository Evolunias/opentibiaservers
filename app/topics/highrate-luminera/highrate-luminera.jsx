import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera');
}

export default function HighrateLumineraKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera" />;
}
