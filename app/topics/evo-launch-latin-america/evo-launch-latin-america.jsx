import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-latin-america');
}

export default function EvoLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-latin-america" />;
}
