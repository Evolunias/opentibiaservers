import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-screenshots');
}

export default function OtServerListScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-screenshots" />;
}
