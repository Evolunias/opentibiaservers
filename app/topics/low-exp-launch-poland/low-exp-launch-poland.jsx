import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-poland');
}

export default function LowExpLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-poland" />;
}
