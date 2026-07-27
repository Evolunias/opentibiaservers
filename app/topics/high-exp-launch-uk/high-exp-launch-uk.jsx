import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-uk');
}

export default function HighExpLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-uk" />;
}
