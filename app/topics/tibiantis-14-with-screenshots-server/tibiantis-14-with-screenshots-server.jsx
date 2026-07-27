import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-with-screenshots-server');
}

export default function Tibiantis14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-with-screenshots-server" />;
}
