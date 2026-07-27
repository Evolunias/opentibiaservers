import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-south-america');
}

export default function AlasteraFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-south-america" />;
}
