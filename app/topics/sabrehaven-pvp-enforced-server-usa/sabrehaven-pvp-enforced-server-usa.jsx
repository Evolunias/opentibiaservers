import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-usa');
}

export default function SabrehavenPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-usa" />;
}
