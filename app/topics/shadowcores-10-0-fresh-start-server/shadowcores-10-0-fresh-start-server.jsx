import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-fresh-start-server');
}

export default function Shadowcores100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-fresh-start-server" />;
}
