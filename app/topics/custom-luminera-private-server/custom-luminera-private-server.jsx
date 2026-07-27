import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-private-server');
}

export default function CustomLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-private-server" />;
}
