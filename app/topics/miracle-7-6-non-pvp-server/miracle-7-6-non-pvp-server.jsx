import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-7-6-non-pvp-server');
}

export default function Miracle76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-7-6-non-pvp-server" />;
}
