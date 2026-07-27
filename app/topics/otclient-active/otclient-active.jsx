import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-active');
}

export default function OtclientActiveKeywordPage() {
  return <StaticKeywordPage slug="otclient-active" />;
}
