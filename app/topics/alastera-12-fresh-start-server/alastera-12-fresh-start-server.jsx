import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-fresh-start-server');
}

export default function Alastera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-fresh-start-server" />;
}
