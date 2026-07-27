import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-france');
}

export default function DemolidoresNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-france" />;
}
