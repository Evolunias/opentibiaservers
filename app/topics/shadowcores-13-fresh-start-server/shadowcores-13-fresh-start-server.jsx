import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-fresh-start-server');
}

export default function Shadowcores13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-fresh-start-server" />;
}
