import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiascape-server');
}

export default function NonPvpTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiascape-server" />;
}
