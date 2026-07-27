import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-uk');
}

export default function TibiantisWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-uk" />;
}
