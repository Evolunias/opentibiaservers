import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-poland');
}

export default function NepreniaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-poland" />;
}
