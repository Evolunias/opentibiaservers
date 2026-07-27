import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-launcher');
}

export default function EmpirebrLauncherKeywordPage() {
  return <StaticKeywordPage slug="empirebr-launcher" />;
}
