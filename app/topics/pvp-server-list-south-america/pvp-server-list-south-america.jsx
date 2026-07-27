import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-south-america');
}

export default function PvpServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-south-america" />;
}
