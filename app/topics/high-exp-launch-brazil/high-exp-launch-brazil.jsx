import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-brazil');
}

export default function HighExpLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-brazil" />;
}
