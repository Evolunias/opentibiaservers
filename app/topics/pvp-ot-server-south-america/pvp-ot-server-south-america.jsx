import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-south-america');
}

export default function PvpOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-south-america" />;
}
