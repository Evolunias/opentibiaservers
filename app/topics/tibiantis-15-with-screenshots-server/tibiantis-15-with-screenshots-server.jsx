import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-with-screenshots-server');
}

export default function Tibiantis15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-with-screenshots-server" />;
}
