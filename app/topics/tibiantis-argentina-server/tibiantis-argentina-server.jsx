import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-argentina-server');
}

export default function TibiantisArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-argentina-server" />;
}
