import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-argentina');
}

export default function NepreniaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-argentina" />;
}
