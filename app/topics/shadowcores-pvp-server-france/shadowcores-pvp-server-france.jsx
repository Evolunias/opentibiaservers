import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-france');
}

export default function ShadowcoresPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-france" />;
}
