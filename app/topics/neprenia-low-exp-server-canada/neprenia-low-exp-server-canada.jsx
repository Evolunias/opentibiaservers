import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-canada');
}

export default function NepreniaLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-canada" />;
}
