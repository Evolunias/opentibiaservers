import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-germany');
}

export default function SaintsotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-germany" />;
}
