import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-fresh-start-server');
}

export default function Tibianus14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-fresh-start-server" />;
}
