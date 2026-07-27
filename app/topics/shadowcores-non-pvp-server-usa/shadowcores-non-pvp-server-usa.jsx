import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-usa');
}

export default function ShadowcoresNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-usa" />;
}
