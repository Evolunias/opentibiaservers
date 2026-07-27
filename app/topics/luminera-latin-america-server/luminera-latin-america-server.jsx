import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-latin-america-server');
}

export default function LumineraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-latin-america-server" />;
}
