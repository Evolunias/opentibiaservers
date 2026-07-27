import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-south-america');
}

export default function TibiantisLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-south-america" />;
}
