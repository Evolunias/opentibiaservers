import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-usa');
}

export default function NepreniaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-usa" />;
}
