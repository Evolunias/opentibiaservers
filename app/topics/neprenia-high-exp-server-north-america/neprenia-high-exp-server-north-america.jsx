import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-north-america');
}

export default function NepreniaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-north-america" />;
}
