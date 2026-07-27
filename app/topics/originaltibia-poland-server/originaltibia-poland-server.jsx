import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-poland-server');
}

export default function OriginaltibiaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-poland-server" />;
}
