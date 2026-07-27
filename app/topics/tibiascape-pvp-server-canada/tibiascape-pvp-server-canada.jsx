import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-canada');
}

export default function TibiascapePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-canada" />;
}
