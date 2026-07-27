import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-brazil');
}

export default function ShadowcoresPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-brazil" />;
}
