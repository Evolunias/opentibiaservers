import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-argentina');
}

export default function TibiascapeNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-argentina" />;
}
