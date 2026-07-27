import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-brazil');
}

export default function SaintsotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-brazil" />;
}
