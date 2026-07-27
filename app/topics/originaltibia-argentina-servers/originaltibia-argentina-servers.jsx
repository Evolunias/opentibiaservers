import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-argentina-servers');
}

export default function OriginaltibiaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-argentina-servers" />;
}
