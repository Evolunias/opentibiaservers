import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-fresh-start-server');
}

export default function Alastera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-fresh-start-server" />;
}
