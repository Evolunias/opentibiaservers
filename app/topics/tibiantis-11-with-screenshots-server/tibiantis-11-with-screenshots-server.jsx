import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-with-screenshots-server');
}

export default function Tibiantis11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-with-screenshots-server" />;
}
