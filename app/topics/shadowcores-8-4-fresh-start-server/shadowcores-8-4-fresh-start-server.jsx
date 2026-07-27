import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-fresh-start-server');
}

export default function Shadowcores84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-fresh-start-server" />;
}
