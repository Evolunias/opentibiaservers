import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-fresh-start-server');
}

export default function Tibianus71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-fresh-start-server" />;
}
