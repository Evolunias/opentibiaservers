import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-chile-servers');
}

export default function OriginaltibiaChileServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-chile-servers" />;
}
