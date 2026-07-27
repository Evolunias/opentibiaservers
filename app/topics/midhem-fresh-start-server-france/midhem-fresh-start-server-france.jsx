import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-france');
}

export default function MidhemFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-france" />;
}
