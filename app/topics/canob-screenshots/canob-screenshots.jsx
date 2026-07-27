import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-screenshots');
}

export default function CanobScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="canob-screenshots" />;
}
