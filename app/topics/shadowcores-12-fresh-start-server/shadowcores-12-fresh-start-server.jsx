import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-fresh-start-server');
}

export default function Shadowcores12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-fresh-start-server" />;
}
