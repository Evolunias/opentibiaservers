import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-poland');
}

export default function TibiantisWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-poland" />;
}
