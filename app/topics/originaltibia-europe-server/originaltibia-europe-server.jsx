import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-europe-server');
}

export default function OriginaltibiaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-europe-server" />;
}
