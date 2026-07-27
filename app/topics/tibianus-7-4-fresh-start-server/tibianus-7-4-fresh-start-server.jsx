import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-fresh-start-server');
}

export default function Tibianus74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-fresh-start-server" />;
}
