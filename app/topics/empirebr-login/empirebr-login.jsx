import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-login');
}

export default function EmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="empirebr-login" />;
}
