import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-fresh-start-server');
}

export default function Shadowcores11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-fresh-start-server" />;
}
