import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-with-screenshots-server');
}

export default function Carlinot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-with-screenshots-server" />;
}
