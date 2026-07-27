import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-canada');
}

export default function TibianusNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-canada" />;
}
