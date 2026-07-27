import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-canada');
}

export default function DemolidoresPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-canada" />;
}
