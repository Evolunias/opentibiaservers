import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-mexico');
}

export default function TibiantisLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-mexico" />;
}
