import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-uk');
}

export default function MidhemWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-uk" />;
}
