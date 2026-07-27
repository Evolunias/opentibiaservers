import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-germany');
}

export default function AlasteraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-germany" />;
}
