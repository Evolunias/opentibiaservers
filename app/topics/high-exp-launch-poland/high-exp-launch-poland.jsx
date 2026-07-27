import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-poland');
}

export default function HighExpLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-poland" />;
}
