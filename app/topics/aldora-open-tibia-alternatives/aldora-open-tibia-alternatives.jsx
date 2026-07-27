import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-open-tibia-alternatives');
}

export default function AldoraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="aldora-open-tibia-alternatives" />;
}
