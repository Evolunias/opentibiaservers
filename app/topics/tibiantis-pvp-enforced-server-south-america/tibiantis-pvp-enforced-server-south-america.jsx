import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-south-america');
}

export default function TibiantisPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-south-america" />;
}
