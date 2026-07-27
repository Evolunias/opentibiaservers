import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-fresh-start-server');
}

export default function Shadowcores86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-fresh-start-server" />;
}
