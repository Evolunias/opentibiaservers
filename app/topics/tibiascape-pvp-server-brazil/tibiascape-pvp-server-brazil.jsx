import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-brazil');
}

export default function TibiascapePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-brazil" />;
}
