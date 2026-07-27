import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-screenshots');
}

export default function TibiaCustomServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-screenshots" />;
}
