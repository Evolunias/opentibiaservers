import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-fresh-start-server');
}

export default function Alastera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-fresh-start-server" />;
}
