import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-canada-servers');
}

export default function MidhemCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-canada-servers" />;
}
