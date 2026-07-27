import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-fresh-start-server');
}

export default function Alastera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-fresh-start-server" />;
}
