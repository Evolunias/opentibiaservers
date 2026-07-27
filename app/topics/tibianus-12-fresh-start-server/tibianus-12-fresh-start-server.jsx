import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-fresh-start-server');
}

export default function Tibianus12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-fresh-start-server" />;
}
