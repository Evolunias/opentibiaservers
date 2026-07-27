import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-screenshots');
}

export default function TibiaraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-screenshots" />;
}
