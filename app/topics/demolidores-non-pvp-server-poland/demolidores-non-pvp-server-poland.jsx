import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-poland');
}

export default function DemolidoresNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-poland" />;
}
