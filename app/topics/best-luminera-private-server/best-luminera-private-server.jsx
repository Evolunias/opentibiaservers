import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-private-server');
}

export default function BestLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-private-server" />;
}
