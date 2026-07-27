import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-france');
}

export default function NepreniaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-france" />;
}
