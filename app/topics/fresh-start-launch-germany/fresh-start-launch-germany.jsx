import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-germany');
}

export default function FreshStartLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-germany" />;
}
