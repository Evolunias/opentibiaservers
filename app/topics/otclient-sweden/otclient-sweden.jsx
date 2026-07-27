import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-sweden');
}

export default function OtclientSwedenKeywordPage() {
  return <StaticKeywordPage slug="otclient-sweden" />;
}
