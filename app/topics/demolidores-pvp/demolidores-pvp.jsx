import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp');
}

export default function DemolidoresPvpKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp" />;
}
