import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-north-america');
}

export default function DemolidoresPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-north-america" />;
}
