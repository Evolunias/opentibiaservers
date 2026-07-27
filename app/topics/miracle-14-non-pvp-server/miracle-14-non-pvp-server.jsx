import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-non-pvp-server');
}

export default function Miracle14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-non-pvp-server" />;
}
