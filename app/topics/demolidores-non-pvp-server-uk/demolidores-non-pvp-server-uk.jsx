import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-uk');
}

export default function DemolidoresNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-uk" />;
}
