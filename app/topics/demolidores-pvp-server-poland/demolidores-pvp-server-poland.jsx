import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-poland');
}

export default function DemolidoresPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-poland" />;
}
