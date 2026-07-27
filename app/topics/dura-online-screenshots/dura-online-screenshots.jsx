import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-screenshots');
}

export default function DuraOnlineScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-screenshots" />;
}
