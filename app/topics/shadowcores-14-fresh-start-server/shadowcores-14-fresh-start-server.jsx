import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-fresh-start-server');
}

export default function Shadowcores14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-fresh-start-server" />;
}
