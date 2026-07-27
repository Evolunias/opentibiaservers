import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-argentina');
}

export default function TibiantisLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-argentina" />;
}
