import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-screenshots');
}

export default function TibiaHighExpServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-screenshots" />;
}
