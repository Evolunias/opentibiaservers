import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-canada');
}

export default function BlazeraWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-canada" />;
}
