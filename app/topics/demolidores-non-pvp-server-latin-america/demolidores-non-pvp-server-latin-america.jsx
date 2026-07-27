import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-latin-america');
}

export default function DemolidoresNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-latin-america" />;
}
