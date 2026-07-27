import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-fresh-start-server');
}

export default function Tibianus84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-fresh-start-server" />;
}
