import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-usa');
}

export default function FreshStartLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-usa" />;
}
