import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-north-america');
}

export default function FreshStartLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-north-america" />;
}
