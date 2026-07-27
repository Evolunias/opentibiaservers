import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-poland');
}

export default function MediviaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-poland" />;
}
