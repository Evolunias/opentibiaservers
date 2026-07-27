import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-usa-server');
}

export default function OriginaltibiaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-usa-server" />;
}
