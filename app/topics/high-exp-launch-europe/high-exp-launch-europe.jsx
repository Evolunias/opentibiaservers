import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-europe');
}

export default function HighExpLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-europe" />;
}
