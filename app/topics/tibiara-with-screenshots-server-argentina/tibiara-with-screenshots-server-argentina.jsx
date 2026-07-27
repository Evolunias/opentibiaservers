import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-screenshots-server-argentina');
}

export default function TibiaraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-screenshots-server-argentina" />;
}
