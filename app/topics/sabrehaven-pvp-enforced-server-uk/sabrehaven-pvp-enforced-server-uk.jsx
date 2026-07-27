import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-uk');
}

export default function SabrehavenPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-uk" />;
}
