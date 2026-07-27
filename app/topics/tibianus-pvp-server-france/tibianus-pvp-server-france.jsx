import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-france');
}

export default function TibianusPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-france" />;
}
