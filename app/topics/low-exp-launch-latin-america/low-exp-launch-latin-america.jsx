import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-latin-america');
}

export default function LowExpLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-latin-america" />;
}
