import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-poland');
}

export default function NepreniaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-poland" />;
}
