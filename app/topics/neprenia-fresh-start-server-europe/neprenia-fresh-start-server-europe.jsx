import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-europe');
}

export default function NepreniaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-europe" />;
}
