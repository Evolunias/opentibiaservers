import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-screenshots');
}

export default function TibiaOtServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-screenshots" />;
}
