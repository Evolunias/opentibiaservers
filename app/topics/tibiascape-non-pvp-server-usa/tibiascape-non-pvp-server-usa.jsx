import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-usa');
}

export default function TibiascapeNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-usa" />;
}
