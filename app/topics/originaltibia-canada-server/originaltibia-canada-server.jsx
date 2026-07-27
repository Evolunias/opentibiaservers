import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-canada-server');
}

export default function OriginaltibiaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-canada-server" />;
}
