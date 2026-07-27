import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-poland');
}

export default function NostaltherWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-poland" />;
}
