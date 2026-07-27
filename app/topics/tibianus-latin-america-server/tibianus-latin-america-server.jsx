import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-latin-america-server');
}

export default function TibianusLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-latin-america-server" />;
}
