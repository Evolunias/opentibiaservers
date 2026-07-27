import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-fresh-start-server');
}

export default function Shadowcores74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-fresh-start-server" />;
}
