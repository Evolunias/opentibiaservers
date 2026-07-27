import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-france-server');
}

export default function MidhemFranceServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-france-server" />;
}
