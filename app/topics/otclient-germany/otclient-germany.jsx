import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-germany');
}

export default function OtclientGermanyKeywordPage() {
  return <StaticKeywordPage slug="otclient-germany" />;
}
