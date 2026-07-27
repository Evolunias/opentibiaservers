import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-open-tibia-alternatives');
}

export default function SameraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="samera-open-tibia-alternatives" />;
}
