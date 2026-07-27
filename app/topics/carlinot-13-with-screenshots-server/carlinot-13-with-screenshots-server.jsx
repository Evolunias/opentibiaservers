import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-with-screenshots-server');
}

export default function Carlinot13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-with-screenshots-server" />;
}
