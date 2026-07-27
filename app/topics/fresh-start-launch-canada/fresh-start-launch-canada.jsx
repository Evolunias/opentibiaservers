import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-canada');
}

export default function FreshStartLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-canada" />;
}
