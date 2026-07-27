import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-fresh-start-server');
}

export default function Tibianus15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-fresh-start-server" />;
}
