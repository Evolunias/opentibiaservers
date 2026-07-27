import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-uk');
}

export default function BlazeraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-uk" />;
}
