import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-france');
}

export default function NostaltherPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-france" />;
}
