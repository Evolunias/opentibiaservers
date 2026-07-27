import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-canada');
}

export default function NostaltherPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-canada" />;
}
