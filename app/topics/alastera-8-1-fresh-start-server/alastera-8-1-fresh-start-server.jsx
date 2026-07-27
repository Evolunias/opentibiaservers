import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-fresh-start-server');
}

export default function Alastera81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-fresh-start-server" />;
}
