import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-chile-server');
}

export default function OriginaltibiaChileServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-chile-server" />;
}
