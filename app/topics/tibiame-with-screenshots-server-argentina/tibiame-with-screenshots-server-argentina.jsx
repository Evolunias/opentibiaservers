import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-argentina');
}

export default function TibiameWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-argentina" />;
}
