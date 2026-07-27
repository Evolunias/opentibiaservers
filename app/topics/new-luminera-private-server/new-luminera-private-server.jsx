import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-private-server');
}

export default function NewLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-private-server" />;
}
