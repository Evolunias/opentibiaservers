import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-fresh-start-server');
}

export default function Alastera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-fresh-start-server" />;
}
