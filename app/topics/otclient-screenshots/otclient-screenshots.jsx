import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-screenshots');
}

export default function OtclientScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otclient-screenshots" />;
}
