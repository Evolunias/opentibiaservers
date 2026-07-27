import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-latin-america');
}

export default function BlazeraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-latin-america" />;
}
