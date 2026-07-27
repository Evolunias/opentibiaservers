import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-private-server');
}

export default function LowrateLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-private-server" />;
}
