import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-brazil');
}

export default function FunServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="fun-server-brazil" />;
}
