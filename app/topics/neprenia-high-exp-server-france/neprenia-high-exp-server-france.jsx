import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-france');
}

export default function NepreniaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-france" />;
}
