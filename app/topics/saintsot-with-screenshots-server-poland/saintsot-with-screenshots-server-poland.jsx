import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-poland');
}

export default function SaintsotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-poland" />;
}
