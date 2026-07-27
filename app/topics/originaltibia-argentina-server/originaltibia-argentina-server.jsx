import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-argentina-server');
}

export default function OriginaltibiaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-argentina-server" />;
}
