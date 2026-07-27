import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-usa');
}

export default function DemolidoresNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-usa" />;
}
