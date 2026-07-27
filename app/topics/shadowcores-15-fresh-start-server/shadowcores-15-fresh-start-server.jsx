import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-fresh-start-server');
}

export default function Shadowcores15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-fresh-start-server" />;
}
