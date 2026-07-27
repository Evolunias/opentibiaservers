import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-north-america');
}

export default function TibiantisHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-north-america" />;
}
