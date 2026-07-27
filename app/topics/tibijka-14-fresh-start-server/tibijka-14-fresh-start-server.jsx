import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-fresh-start-server');
}

export default function Tibijka14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-fresh-start-server" />;
}
