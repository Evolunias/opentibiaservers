import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-pvp');
}

export default function FunServerPvpKeywordPage() {
  return <StaticKeywordPage slug="fun-server-pvp" />;
}
