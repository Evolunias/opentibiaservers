import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-europe');
}

export default function NepreniaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-europe" />;
}
