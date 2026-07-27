import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-sweden');
}

export default function FunServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="fun-server-sweden" />;
}
