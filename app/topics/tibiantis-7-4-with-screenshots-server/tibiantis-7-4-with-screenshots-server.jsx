import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-with-screenshots-server');
}

export default function Tibiantis74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-with-screenshots-server" />;
}
