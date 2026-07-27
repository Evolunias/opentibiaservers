import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-argentina');
}

export default function ShadowcoresNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-argentina" />;
}
