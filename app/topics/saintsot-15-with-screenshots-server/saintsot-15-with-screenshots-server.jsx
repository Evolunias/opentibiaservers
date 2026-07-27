import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-with-screenshots-server');
}

export default function Saintsot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-with-screenshots-server" />;
}
