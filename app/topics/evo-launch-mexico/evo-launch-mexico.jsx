import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-mexico');
}

export default function EvoLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-mexico" />;
}
