import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-canada');
}

export default function NepreniaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-canada" />;
}
