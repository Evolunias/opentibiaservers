import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-private-server');
}

export default function ActiveLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-private-server" />;
}
