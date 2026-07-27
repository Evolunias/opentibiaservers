import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-optional-pvp');
}

export default function NeranaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="nerana-optional-pvp" />;
}
