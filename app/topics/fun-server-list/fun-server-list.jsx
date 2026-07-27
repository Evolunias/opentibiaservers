import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-list');
}

export default function FunServerListKeywordPage() {
  return <StaticKeywordPage slug="fun-server-list" />;
}
