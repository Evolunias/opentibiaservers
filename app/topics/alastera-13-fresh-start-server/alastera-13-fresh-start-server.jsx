import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-fresh-start-server');
}

export default function Alastera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-fresh-start-server" />;
}
