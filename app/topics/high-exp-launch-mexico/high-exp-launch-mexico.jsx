import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-launch-mexico');
}

export default function HighExpLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-launch-mexico" />;
}
