import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-mexico');
}

export default function NepreniaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-mexico" />;
}
