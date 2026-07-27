import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-fresh-start-server');
}

export default function Tibianus81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-fresh-start-server" />;
}
