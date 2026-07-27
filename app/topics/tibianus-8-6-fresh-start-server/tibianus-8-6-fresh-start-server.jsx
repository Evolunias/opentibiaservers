import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-fresh-start-server');
}

export default function Tibianus86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-fresh-start-server" />;
}
