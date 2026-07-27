import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-usa');
}

export default function LowExpLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-usa" />;
}
