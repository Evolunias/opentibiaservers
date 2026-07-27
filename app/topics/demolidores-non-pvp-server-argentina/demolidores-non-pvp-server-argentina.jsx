import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-argentina');
}

export default function DemolidoresNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-argentina" />;
}
