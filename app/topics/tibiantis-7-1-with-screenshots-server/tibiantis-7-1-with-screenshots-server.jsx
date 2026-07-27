import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-with-screenshots-server');
}

export default function Tibiantis71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-with-screenshots-server" />;
}
