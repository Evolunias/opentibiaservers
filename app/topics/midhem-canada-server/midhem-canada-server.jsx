import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-canada-server');
}

export default function MidhemCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-canada-server" />;
}
