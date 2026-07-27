import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-europe');
}

export default function TibiascapePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-europe" />;
}
