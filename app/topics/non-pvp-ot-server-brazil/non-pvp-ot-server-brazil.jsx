import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-brazil');
}

export default function NonPvpOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-brazil" />;
}
