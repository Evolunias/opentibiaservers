import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-private-server');
}

export default function TopLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-private-server" />;
}
