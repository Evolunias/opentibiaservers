import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-mexico');
}

export default function DemolidoresPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-mexico" />;
}
