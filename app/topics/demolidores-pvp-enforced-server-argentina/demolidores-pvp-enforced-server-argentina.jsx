import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-argentina');
}

export default function DemolidoresPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-argentina" />;
}
