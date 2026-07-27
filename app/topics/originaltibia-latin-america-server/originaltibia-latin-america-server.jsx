import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-latin-america-server');
}

export default function OriginaltibiaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-latin-america-server" />;
}
