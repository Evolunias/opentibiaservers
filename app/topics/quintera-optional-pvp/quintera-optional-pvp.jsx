import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-optional-pvp');
}

export default function QuinteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="quintera-optional-pvp" />;
}
