import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-brazil');
}

export default function DemolidoresPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-brazil" />;
}
