import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-fresh-start-server');
}

export default function Shadowcores76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-fresh-start-server" />;
}
