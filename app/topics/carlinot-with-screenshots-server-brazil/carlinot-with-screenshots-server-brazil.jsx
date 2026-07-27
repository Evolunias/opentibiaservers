import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-brazil');
}

export default function CarlinotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-brazil" />;
}
