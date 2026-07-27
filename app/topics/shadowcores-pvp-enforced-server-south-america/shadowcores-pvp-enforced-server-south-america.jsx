import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-south-america');
}

export default function ShadowcoresPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-south-america" />;
}
