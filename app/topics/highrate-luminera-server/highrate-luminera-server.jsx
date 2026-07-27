import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-server');
}

export default function HighrateLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-server" />;
}
