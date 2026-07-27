import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-canada');
}

export default function PvpServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-canada" />;
}
