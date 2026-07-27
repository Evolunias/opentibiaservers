import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-poland-servers');
}

export default function OriginaltibiaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-poland-servers" />;
}
