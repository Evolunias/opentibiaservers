import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-europe');
}

export default function BlazeraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-europe" />;
}
