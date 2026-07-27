import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-latin-america-servers');
}

export default function LumineraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-latin-america-servers" />;
}
