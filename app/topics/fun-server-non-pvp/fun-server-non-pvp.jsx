import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-non-pvp');
}

export default function FunServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="fun-server-non-pvp" />;
}
