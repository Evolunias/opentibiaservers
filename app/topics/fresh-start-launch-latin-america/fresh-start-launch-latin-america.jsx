import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-latin-america');
}

export default function FreshStartLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-latin-america" />;
}
