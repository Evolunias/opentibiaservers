import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-poland');
}

export default function TibiameWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-poland" />;
}
