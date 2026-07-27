import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-open-tibia-alternatives');
}

export default function HarmoniaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="harmonia-open-tibia-alternatives" />;
}
