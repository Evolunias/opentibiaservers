import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-screenshots');
}

export default function PvpeServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-screenshots" />;
}
