import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-france');
}

export default function TibiantisPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-france" />;
}
