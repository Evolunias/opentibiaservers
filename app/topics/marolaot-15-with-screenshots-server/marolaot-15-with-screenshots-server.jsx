import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-with-screenshots-server');
}

export default function Marolaot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-with-screenshots-server" />;
}
