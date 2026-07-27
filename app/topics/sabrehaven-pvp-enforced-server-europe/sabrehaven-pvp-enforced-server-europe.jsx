import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-europe');
}

export default function SabrehavenPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-europe" />;
}
