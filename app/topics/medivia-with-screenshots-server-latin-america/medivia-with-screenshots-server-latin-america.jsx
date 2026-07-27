import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-latin-america');
}

export default function MediviaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-latin-america" />;
}
