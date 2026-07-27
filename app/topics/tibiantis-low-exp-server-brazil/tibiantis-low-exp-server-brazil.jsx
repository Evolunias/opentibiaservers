import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-brazil');
}

export default function TibiantisLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-brazil" />;
}
