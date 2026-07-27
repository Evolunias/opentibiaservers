import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-europe');
}

export default function MidhemPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-europe" />;
}
