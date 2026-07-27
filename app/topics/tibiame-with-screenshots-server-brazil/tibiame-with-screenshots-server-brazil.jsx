import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-brazil');
}

export default function TibiameWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-brazil" />;
}
