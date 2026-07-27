import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-screenshots');
}

export default function TibiaPrivateServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-screenshots" />;
}
