import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-europe');
}

export default function NostaltherWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-europe" />;
}
