import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-screenshots');
}

export default function Tibia13ServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-screenshots" />;
}
