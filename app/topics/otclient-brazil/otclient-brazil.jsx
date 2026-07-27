import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-brazil');
}

export default function OtclientBrazilKeywordPage() {
  return <StaticKeywordPage slug="otclient-brazil" />;
}
