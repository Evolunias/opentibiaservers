import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-germany-server');
}

export default function OriginaltibiaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-germany-server" />;
}
