import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-with-screenshots-server');
}

export default function Canob11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-with-screenshots-server" />;
}
