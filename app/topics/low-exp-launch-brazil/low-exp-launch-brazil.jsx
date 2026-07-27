import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-brazil');
}

export default function LowExpLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-brazil" />;
}
