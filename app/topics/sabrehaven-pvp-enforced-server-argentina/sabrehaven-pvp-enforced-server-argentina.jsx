import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-argentina');
}

export default function SabrehavenPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-argentina" />;
}
