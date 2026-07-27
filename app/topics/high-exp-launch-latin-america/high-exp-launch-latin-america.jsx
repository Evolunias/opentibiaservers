import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-latin-america');
}

export default function HighExpLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-latin-america" />;
}
