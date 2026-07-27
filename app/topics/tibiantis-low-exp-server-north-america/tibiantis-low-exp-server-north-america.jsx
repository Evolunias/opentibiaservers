import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-north-america');
}

export default function TibiantisLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-north-america" />;
}
