import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-europe');
}

export default function MediviaWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-europe" />;
}
