import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-france');
}

export default function EmpirebrBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-france" />;
}
