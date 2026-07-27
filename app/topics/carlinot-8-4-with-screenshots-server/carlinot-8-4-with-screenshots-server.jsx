import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-with-screenshots-server');
}

export default function Carlinot84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-with-screenshots-server" />;
}
