import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-poland');
}

export default function NepreniaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-poland" />;
}
