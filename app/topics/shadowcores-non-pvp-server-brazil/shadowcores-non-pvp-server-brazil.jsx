import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-brazil');
}

export default function ShadowcoresNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-brazil" />;
}
