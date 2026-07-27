import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-germany');
}

export default function NepreniaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-germany" />;
}
