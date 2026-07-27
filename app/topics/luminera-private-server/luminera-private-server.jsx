import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-private-server');
}

export default function LumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-private-server" />;
}
