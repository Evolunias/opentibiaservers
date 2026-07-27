import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-with-screenshots-server');
}

export default function Tibiantis84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-with-screenshots-server" />;
}
