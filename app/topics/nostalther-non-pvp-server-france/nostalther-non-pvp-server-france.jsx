import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-france');
}

export default function NostaltherNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-france" />;
}
