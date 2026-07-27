import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-private-server');
}

export default function FreshStartLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-private-server" />;
}
