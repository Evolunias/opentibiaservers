import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-brazil');
}

export default function InfernalOtBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-brazil" />;
}
