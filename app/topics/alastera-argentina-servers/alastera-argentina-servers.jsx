import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-argentina-servers');
}

export default function AlasteraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-argentina-servers" />;
}
