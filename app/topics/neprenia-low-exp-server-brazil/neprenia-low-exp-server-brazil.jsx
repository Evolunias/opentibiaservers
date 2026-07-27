import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-brazil');
}

export default function NepreniaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-brazil" />;
}
