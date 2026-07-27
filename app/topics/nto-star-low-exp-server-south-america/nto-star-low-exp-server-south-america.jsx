import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-south-america');
}

export default function NtoStarLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-south-america" />;
}
