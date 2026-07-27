import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-brazil');
}

export default function TibiaraWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-brazil" />;
}
