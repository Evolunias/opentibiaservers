import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-north-america');
}

export default function NepreniaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-north-america" />;
}
