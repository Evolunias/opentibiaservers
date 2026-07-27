import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-screenshots');
}

export default function BaiakServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-screenshots" />;
}
