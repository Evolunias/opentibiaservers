import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-poland');
}

export default function SabrehavenPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-poland" />;
}
