import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-europe');
}

export default function SaintsotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-europe" />;
}
