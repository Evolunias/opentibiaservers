import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-open-tibia');
}

export default function TopLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-open-tibia" />;
}
