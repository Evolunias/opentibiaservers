import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-north-america');
}

export default function LowExpLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-north-america" />;
}
