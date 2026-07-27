import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-south-america');
}

export default function TibiascapeNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-south-america" />;
}
