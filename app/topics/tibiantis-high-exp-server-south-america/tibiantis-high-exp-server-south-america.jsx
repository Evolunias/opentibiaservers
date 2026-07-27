import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-south-america');
}

export default function TibiantisHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-south-america" />;
}
