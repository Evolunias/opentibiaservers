import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-south-america');
}

export default function TibiascapePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-south-america" />;
}
