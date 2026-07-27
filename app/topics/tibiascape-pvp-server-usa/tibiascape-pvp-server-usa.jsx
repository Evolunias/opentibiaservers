import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-usa');
}

export default function TibiascapePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-usa" />;
}
