import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-canada-servers');
}

export default function OriginaltibiaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-canada-servers" />;
}
