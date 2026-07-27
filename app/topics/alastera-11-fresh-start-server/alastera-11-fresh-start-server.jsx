import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-fresh-start-server');
}

export default function Alastera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-fresh-start-server" />;
}
