import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-europe-server');
}

export default function MidhemEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-europe-server" />;
}
