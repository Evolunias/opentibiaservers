import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-europe');
}

export default function DemolidoresPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-europe" />;
}
