import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-france');
}

export default function DemolidoresPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-france" />;
}
