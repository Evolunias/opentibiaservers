import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-fresh-start-server');
}

export default function Tibianus13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-fresh-start-server" />;
}
