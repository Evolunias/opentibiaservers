import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-sweden-server');
}

export default function AlasteraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-sweden-server" />;
}
