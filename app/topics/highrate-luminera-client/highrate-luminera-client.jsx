import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-client');
}

export default function HighrateLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-client" />;
}
