import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-germany');
}

export default function DemolidoresPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-germany" />;
}
