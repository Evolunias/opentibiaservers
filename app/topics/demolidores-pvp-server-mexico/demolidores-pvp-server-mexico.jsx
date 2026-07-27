import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-mexico');
}

export default function DemolidoresPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-mexico" />;
}
