import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-screenshots');
}

export default function TibiameScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-screenshots" />;
}
