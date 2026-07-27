import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-south-america');
}

export default function NonPvpOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-south-america" />;
}
