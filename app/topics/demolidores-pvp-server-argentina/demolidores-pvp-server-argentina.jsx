import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-argentina');
}

export default function DemolidoresPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-argentina" />;
}
