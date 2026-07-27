import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-6-non-pvp-server');
}

export default function Miracle86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-6-non-pvp-server" />;
}
