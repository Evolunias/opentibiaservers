import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-brazil');
}

export default function TibiascapeNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-brazil" />;
}
