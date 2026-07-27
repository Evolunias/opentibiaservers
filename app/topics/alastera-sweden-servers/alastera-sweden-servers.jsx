import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-sweden-servers');
}

export default function AlasteraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-sweden-servers" />;
}
