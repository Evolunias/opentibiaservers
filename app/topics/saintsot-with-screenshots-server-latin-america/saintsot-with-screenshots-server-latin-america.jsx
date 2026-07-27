import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-latin-america');
}

export default function SaintsotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-latin-america" />;
}
