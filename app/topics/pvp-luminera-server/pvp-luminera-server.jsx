import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-luminera-server');
}

export default function PvpLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-luminera-server" />;
}
