import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-with-screenshots-server');
}

export default function Marolaot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-with-screenshots-server" />;
}
