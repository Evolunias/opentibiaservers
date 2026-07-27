import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-north-america');
}

export default function TibiascapePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-north-america" />;
}
