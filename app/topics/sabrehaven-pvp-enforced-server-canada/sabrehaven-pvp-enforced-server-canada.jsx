import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-canada');
}

export default function SabrehavenPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-canada" />;
}
