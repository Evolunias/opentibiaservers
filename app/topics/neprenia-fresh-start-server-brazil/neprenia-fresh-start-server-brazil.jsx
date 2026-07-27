import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-brazil');
}

export default function NepreniaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-brazil" />;
}
