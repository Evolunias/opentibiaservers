import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-non-pvp-server');
}

export default function Miracle13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-non-pvp-server" />;
}
