import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-brazil');
}

export default function FreshStartLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-brazil" />;
}
