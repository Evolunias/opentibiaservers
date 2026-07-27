import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-usa');
}

export default function MediviaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-usa" />;
}
