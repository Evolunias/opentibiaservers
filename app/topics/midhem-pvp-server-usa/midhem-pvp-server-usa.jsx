import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-usa');
}

export default function MidhemPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-usa" />;
}
