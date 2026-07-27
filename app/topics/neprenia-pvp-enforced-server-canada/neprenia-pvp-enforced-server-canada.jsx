import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-canada');
}

export default function NepreniaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-canada" />;
}
