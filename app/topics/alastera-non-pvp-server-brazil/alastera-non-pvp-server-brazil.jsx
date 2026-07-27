import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-brazil');
}

export default function AlasteraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-brazil" />;
}
