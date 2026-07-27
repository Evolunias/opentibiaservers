import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-canada');
}

export default function InfernalOtBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-canada" />;
}
