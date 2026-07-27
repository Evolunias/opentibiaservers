import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-canada');
}

export default function MediviaWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-canada" />;
}
