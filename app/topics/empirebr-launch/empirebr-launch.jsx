import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-launch');
}

export default function EmpirebrLaunchKeywordPage() {
  return <StaticKeywordPage slug="empirebr-launch" />;
}
