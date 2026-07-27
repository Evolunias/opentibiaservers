import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-brazil');
}

export default function SabrehavenPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-brazil" />;
}
