import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-screenshots');
}

export default function NonPvpOtServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-screenshots" />;
}
