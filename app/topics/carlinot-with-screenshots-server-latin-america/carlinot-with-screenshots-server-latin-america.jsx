import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-latin-america');
}

export default function CarlinotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-latin-america" />;
}
