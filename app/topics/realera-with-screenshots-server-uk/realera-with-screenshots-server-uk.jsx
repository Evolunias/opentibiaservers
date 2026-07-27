import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-uk');
}

export default function RealeraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-uk" />;
}
