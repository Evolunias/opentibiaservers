import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-optional-pvp');
}

export default function SecuraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="secura-optional-pvp" />;
}
