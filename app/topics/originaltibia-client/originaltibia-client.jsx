import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-client');
}

export default function OriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-client" />;
}
