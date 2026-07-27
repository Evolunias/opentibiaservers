import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-active');
}

export default function FunServerActiveKeywordPage() {
  return <StaticKeywordPage slug="fun-server-active" />;
}
