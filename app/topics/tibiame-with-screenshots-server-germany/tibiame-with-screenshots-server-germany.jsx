import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-germany');
}

export default function TibiameWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-germany" />;
}
