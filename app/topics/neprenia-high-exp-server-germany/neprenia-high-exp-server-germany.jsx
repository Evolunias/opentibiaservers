import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-germany');
}

export default function NepreniaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-germany" />;
}
