import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-optional-pvp');
}

export default function JameraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="jamera-optional-pvp" />;
}
