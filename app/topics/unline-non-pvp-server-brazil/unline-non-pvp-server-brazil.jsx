import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-brazil');
}

export default function UnlineNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-brazil" />;
}
