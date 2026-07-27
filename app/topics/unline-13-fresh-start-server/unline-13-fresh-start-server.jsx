import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-fresh-start-server');
}

export default function Unline13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-fresh-start-server" />;
}
