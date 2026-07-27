import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-private-server');
}

export default function PopularLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-private-server" />;
}
