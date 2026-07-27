import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-france');
}

export default function TibiantisPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-france" />;
}
