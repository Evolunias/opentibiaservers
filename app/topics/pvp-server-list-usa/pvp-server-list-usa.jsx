import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-usa');
}

export default function PvpServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-usa" />;
}
