import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-germany');
}

export default function BlazeraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-germany" />;
}
