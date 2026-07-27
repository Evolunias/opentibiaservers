import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-germany');
}

export default function DemolidoresNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-germany" />;
}
