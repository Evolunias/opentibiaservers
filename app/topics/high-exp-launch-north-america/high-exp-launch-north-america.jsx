import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-north-america');
}

export default function HighExpLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-north-america" />;
}
