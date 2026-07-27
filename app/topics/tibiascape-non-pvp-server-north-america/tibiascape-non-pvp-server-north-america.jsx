import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-north-america');
}

export default function TibiascapeNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-north-america" />;
}
