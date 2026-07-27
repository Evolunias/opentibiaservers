import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-client');
}

export default function FunServerClientKeywordPage() {
  return <StaticKeywordPage slug="fun-server-client" />;
}
