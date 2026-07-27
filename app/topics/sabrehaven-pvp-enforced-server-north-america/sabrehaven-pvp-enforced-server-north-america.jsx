import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-north-america');
}

export default function SabrehavenPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-north-america" />;
}
