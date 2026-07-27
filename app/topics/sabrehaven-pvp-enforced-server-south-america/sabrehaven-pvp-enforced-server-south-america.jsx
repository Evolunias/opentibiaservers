import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-south-america');
}

export default function SabrehavenPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-south-america" />;
}
