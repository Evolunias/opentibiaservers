import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-uk');
}

export default function TibiascapePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-uk" />;
}
