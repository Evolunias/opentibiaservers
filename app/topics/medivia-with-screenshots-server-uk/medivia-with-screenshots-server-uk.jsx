import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-uk');
}

export default function MediviaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-uk" />;
}
