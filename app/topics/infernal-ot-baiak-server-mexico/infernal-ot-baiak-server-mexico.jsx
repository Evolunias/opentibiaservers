import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-mexico');
}

export default function InfernalOtBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-mexico" />;
}
