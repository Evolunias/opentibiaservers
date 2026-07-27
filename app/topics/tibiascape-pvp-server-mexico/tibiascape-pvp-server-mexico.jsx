import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-mexico');
}

export default function TibiascapePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-mexico" />;
}
