import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-fresh-start-server');
}

export default function Alastera1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-fresh-start-server" />;
}
