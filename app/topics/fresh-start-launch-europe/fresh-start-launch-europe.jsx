import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-europe');
}

export default function FreshStartLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-europe" />;
}
