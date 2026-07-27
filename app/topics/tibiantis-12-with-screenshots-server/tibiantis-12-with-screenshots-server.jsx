import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-with-screenshots-server');
}

export default function Tibiantis12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-with-screenshots-server" />;
}
