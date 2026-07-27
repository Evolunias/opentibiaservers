import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-france');
}

export default function TibianusPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-france" />;
}
