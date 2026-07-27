import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-canada');
}

export default function DemolidoresNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-canada" />;
}
