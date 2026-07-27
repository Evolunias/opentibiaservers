import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-france');
}

export default function SabrehavenPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-france" />;
}
