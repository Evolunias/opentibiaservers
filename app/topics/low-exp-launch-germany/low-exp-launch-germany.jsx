import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-germany');
}

export default function LowExpLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-germany" />;
}
