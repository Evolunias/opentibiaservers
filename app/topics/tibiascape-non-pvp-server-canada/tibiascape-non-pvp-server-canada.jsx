import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-canada');
}

export default function TibiascapeNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-canada" />;
}
