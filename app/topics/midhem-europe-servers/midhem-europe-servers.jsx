import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-europe-servers');
}

export default function MidhemEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-europe-servers" />;
}
