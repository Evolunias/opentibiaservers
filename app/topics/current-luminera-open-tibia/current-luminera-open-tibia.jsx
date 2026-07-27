import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-open-tibia');
}

export default function CurrentLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-open-tibia" />;
}
