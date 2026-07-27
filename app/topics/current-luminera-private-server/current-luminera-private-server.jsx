import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-private-server');
}

export default function CurrentLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-private-server" />;
}
