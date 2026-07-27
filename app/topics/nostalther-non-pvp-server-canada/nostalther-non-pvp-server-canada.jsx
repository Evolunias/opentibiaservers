import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-canada');
}

export default function NostaltherNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-canada" />;
}
