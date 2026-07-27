import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-europe');
}

export default function DemolidoresNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-europe" />;
}
