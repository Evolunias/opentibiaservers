import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-france');
}

export default function OriginaltibiaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-france" />;
}
