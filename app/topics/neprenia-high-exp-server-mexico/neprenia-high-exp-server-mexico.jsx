import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-mexico');
}

export default function NepreniaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-mexico" />;
}
