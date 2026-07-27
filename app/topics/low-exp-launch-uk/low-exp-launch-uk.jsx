import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-uk');
}

export default function LowExpLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-uk" />;
}
