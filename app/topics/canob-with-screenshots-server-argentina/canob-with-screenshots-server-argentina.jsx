import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-argentina');
}

export default function CanobWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-argentina" />;
}
