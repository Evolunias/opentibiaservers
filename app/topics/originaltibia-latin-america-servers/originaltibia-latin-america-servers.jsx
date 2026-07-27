import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-latin-america-servers');
}

export default function OriginaltibiaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-latin-america-servers" />;
}
