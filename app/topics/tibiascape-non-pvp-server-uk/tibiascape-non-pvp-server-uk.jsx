import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-uk');
}

export default function TibiascapeNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-uk" />;
}
