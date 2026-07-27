import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-france-servers');
}

export default function TibiascapeFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-france-servers" />;
}
