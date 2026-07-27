import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-luminera-server');
}

export default function PvpeLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-luminera-server" />;
}
