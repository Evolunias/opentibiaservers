import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-usa');
}

export default function HighExpLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-usa" />;
}
