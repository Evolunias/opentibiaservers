import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-canada');
}

export default function NepreniaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-canada" />;
}
