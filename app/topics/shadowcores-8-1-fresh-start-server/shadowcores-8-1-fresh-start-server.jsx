import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-fresh-start-server');
}

export default function Shadowcores81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-fresh-start-server" />;
}
