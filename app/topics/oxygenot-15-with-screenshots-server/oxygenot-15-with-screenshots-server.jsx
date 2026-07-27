import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-with-screenshots-server');
}

export default function Oxygenot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-with-screenshots-server" />;
}
