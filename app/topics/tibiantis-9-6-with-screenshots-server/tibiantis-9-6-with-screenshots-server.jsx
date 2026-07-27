import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-with-screenshots-server');
}

export default function Tibiantis96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-with-screenshots-server" />;
}
