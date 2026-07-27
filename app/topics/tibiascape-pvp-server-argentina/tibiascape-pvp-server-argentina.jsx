import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-argentina');
}

export default function TibiascapePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-argentina" />;
}
