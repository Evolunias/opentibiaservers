import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-poland');
}

export default function RealeraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-poland" />;
}
