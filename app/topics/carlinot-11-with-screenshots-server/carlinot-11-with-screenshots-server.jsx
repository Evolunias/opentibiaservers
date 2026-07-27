import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-with-screenshots-server');
}

export default function Carlinot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-with-screenshots-server" />;
}
