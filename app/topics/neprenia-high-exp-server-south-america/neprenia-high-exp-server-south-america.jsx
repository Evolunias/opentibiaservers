import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-south-america');
}

export default function NepreniaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-south-america" />;
}
