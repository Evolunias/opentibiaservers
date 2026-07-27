import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-fresh-start-server');
}

export default function Unline15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-fresh-start-server" />;
}
