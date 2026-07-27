import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-uk');
}

export default function DemolidoresPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-uk" />;
}
