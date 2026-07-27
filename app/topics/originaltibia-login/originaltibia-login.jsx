import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-login');
}

export default function OriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-login" />;
}
