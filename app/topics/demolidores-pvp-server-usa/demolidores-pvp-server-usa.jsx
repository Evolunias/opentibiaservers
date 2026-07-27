import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-usa');
}

export default function DemolidoresPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-usa" />;
}
