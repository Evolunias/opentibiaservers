import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-argentina');
}

export default function MidhemNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-argentina" />;
}
