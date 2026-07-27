import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-list');
}

export default function OtclientListKeywordPage() {
  return <StaticKeywordPage slug="otclient-list" />;
}
