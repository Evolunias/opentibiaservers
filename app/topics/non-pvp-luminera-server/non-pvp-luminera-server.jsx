import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-luminera-server');
}

export default function NonPvpLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-luminera-server" />;
}
