import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-europe');
}

export default function LowExpLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-europe" />;
}
