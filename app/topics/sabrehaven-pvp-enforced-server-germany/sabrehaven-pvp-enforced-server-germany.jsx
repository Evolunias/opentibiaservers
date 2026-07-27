import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-germany');
}

export default function SabrehavenPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-germany" />;
}
