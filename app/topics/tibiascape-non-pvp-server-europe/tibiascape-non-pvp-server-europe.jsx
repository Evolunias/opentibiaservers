import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-europe');
}

export default function TibiascapeNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-europe" />;
}
