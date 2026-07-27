import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-baiak-server-europe');
}

export default function EmpirebrBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-baiak-server-europe" />;
}
