import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient');
}

export default function OtclientKeywordPage() {
  return <StaticKeywordPage slug="otclient" />;
}
