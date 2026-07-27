import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-latin-america');
}

export default function DemolidoresPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-latin-america" />;
}
