import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-mexico');
}

export default function DemolidoresNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-mexico" />;
}
