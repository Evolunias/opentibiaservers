import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-with-screenshots-server');
}

export default function Canob96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-with-screenshots-server" />;
}
