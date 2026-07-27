import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-latin-america-server');
}

export default function RealeraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-latin-america-server" />;
}
