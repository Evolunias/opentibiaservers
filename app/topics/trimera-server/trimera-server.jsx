import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-server');
}

export default function TrimeraServerKeywordPage() {
  return <StaticKeywordPage slug="trimera-server" />;
}
