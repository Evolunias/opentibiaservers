import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-poland');
}

export default function RealestaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-poland" />;
}
