import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-latin-america-servers');
}

export default function TibianusLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-latin-america-servers" />;
}
