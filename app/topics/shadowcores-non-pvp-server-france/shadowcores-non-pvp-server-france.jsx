import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-france');
}

export default function ShadowcoresNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-france" />;
}
