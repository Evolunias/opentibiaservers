import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-optional-pvp');
}

export default function ObsidiaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="obsidia-optional-pvp" />;
}
