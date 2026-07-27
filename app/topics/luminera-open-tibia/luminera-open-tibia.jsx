import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-open-tibia');
}

export default function LumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="luminera-open-tibia" />;
}
