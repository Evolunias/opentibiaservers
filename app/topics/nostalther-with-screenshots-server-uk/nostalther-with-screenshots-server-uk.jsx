import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-uk');
}

export default function NostaltherWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-uk" />;
}
