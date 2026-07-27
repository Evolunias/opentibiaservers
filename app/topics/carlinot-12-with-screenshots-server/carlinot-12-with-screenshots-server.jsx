import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-with-screenshots-server');
}

export default function Carlinot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-with-screenshots-server" />;
}
