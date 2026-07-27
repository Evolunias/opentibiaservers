import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-poland');
}

export default function BlazeraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-poland" />;
}
