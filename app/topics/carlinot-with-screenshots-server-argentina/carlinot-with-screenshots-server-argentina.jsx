import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-argentina');
}

export default function CarlinotWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-argentina" />;
}
