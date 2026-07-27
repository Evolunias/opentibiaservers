import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-screenshots-server-france');
}

export default function MarolaotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-screenshots-server-france" />;
}
