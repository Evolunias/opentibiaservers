import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-screenshots');
}

export default function SaintsotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-screenshots" />;
}
