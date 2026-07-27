import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-france');
}

export default function DemolidoresPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-france" />;
}
