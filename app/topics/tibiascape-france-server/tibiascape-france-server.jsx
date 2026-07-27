import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-france-server');
}

export default function TibiascapeFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-france-server" />;
}
