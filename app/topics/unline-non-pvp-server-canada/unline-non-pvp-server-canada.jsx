import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-canada');
}

export default function UnlineNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-canada" />;
}
