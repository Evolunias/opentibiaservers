import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-fresh-start-server');
}

export default function Shadowcores772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-fresh-start-server" />;
}
