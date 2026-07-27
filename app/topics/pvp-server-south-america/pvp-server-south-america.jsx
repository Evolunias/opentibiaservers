import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-south-america');
}

export default function PvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-south-america" />;
}
