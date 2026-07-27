import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-infernal-ot-server');
}

export default function BaiakInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-infernal-ot-server" />;
}
