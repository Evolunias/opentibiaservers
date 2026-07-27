import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-north-america');
}

export default function DemolidoresNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-north-america" />;
}
