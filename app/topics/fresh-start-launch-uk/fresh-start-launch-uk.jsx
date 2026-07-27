import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-uk');
}

export default function FreshStartLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-uk" />;
}
