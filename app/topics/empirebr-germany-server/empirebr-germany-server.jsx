import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-germany-server');
}

export default function EmpirebrGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-germany-server" />;
}
