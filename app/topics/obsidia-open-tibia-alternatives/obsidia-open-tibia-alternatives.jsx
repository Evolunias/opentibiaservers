import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-open-tibia-alternatives');
}

export default function ObsidiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="obsidia-open-tibia-alternatives" />;
}
