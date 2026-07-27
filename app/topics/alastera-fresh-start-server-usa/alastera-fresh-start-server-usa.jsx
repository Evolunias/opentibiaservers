import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-usa');
}

export default function AlasteraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-usa" />;
}
