import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-fresh-start-server');
}

export default function Unline11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-fresh-start-server" />;
}
