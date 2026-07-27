import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-usa');
}

export default function NepreniaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-usa" />;
}
