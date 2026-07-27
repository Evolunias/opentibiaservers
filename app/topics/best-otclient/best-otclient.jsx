import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otclient');
}

export default function BestOtclientKeywordPage() {
  return <StaticKeywordPage slug="best-otclient" />;
}
