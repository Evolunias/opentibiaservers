import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-latin-america-servers');
}

export default function RealeraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-latin-america-servers" />;
}
