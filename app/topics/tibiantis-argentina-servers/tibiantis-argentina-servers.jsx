import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-argentina-servers');
}

export default function TibiantisArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-argentina-servers" />;
}
