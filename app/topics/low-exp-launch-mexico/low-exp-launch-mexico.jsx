import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-launch-mexico');
}

export default function LowExpLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-launch-mexico" />;
}
