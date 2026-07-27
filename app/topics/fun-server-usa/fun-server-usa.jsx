import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-usa');
}

export default function FunServerUsaKeywordPage() {
  return <StaticKeywordPage slug="fun-server-usa" />;
}
