import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-optional-pvp');
}

export default function HarmoniaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="harmonia-optional-pvp" />;
}
