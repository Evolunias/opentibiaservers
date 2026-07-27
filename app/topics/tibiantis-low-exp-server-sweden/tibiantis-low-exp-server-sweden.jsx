import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-sweden');
}

export default function TibiantisLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-sweden" />;
}
