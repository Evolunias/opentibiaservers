import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-usa');
}

export default function BlazeraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-usa" />;
}
