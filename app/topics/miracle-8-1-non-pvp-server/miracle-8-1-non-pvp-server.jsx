import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-1-non-pvp-server');
}

export default function Miracle81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-1-non-pvp-server" />;
}
