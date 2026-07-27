import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-canada');
}

export default function HighExpLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-canada" />;
}
