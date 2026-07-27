import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-argentina');
}

export default function InfernalOtBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-argentina" />;
}
