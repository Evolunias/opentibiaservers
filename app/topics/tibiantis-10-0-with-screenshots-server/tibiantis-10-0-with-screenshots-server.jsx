import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-with-screenshots-server');
}

export default function Tibiantis100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-with-screenshots-server" />;
}
