import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-germany-servers');
}

export default function OriginaltibiaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-germany-servers" />;
}
