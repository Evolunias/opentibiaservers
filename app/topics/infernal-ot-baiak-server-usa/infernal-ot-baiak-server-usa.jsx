import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-usa');
}

export default function InfernalOtBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-usa" />;
}
