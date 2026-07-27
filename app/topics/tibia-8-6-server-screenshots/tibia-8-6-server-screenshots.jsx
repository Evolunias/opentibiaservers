import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-screenshots');
}

export default function Tibia86ServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-screenshots" />;
}
