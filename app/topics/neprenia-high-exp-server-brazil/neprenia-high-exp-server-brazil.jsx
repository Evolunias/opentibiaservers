import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-brazil');
}

export default function NepreniaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-brazil" />;
}
