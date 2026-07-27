import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-south-america');
}

export default function UnlinePvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-south-america" />;
}
