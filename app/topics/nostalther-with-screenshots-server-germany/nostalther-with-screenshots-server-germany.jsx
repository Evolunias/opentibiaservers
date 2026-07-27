import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-germany');
}

export default function NostaltherWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-germany" />;
}
