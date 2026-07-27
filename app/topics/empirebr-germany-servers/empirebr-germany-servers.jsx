import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-germany-servers');
}

export default function EmpirebrGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-germany-servers" />;
}
