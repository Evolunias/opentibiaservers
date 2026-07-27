import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-mexico');
}

export default function NtoStarLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-mexico" />;
}
