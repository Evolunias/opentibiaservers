import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-north-america');
}

export default function BlazeraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-north-america" />;
}
