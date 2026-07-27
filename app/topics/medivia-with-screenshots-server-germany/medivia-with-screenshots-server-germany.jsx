import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-germany');
}

export default function MediviaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-germany" />;
}
