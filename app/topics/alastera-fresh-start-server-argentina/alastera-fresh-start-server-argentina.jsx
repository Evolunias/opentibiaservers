import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-argentina');
}

export default function AlasteraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-argentina" />;
}
