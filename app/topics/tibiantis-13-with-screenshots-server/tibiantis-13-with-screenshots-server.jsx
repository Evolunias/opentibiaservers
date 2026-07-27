import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-with-screenshots-server');
}

export default function Tibiantis13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-with-screenshots-server" />;
}
