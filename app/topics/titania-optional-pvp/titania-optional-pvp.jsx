import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-optional-pvp');
}

export default function TitaniaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="titania-optional-pvp" />;
}
