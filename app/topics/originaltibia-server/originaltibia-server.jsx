import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-server');
}

export default function OriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-server" />;
}
