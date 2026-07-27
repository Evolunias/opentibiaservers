import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-bosses');
}

export default function MidhemBossesKeywordPage() {
  return <StaticKeywordPage slug="midhem-bosses" />;
}
