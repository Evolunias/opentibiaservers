import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-north-america-server');
}

export default function OriginaltibiaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-north-america-server" />;
}
