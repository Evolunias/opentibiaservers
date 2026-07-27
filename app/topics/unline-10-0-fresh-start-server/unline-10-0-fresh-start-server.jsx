import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-fresh-start-server');
}

export default function Unline100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-fresh-start-server" />;
}
