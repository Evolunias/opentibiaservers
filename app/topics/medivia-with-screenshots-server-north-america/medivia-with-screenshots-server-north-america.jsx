import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-north-america');
}

export default function MediviaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-north-america" />;
}
