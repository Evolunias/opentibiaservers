import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-france-servers');
}

export default function MidhemFranceServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-france-servers" />;
}
