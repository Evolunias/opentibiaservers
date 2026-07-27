import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-germany-server');
}

export default function MidhemGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-germany-server" />;
}
