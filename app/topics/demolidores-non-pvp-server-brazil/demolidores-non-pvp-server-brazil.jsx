import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-brazil');
}

export default function DemolidoresNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-brazil" />;
}
