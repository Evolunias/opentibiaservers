import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-fresh-start-server');
}

export default function Alastera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-fresh-start-server" />;
}
