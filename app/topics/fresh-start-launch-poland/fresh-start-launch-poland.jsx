import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-poland');
}

export default function FreshStartLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-poland" />;
}
