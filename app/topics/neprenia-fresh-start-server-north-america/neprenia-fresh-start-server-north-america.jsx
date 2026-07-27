import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-north-america');
}

export default function NepreniaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-north-america" />;
}
