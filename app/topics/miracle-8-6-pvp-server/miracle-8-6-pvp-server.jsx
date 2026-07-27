import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-6-pvp-server');
}

export default function Miracle86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-6-pvp-server" />;
}
