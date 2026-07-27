import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-france');
}

export default function SaintsotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-france" />;
}
