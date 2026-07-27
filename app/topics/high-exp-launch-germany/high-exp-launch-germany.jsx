import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-germany');
}

export default function HighExpLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-germany" />;
}
