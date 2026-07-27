import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-germany');
}

export default function NepreniaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-germany" />;
}
