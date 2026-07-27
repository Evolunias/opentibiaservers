import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server');
}

export default function FunServerKeywordPage() {
  return <StaticKeywordPage slug="fun-server" />;
}
