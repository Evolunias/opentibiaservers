import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-usa');
}

export default function CanobWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-usa" />;
}
