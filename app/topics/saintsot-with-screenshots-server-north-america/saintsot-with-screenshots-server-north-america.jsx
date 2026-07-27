import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-north-america');
}

export default function SaintsotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-north-america" />;
}
