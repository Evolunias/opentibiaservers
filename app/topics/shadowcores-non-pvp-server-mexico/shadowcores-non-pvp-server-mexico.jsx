import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-mexico');
}

export default function ShadowcoresNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-mexico" />;
}
