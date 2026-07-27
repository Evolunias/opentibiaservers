import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-open-tibia-alternatives');
}

export default function JameraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="jamera-open-tibia-alternatives" />;
}
