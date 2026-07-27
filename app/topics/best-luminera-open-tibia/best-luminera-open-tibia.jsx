import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-open-tibia');
}

export default function BestLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-open-tibia" />;
}
