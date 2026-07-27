import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-brazil');
}

export default function CanobWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-brazil" />;
}
