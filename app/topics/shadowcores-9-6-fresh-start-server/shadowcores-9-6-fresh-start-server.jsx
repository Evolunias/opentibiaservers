import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-fresh-start-server');
}

export default function Shadowcores96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-fresh-start-server" />;
}
