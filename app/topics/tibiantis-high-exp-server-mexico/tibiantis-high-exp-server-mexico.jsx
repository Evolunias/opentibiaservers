import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-mexico');
}

export default function TibiantisHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-mexico" />;
}
