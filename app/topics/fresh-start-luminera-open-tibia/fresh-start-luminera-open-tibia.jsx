import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-open-tibia');
}

export default function FreshStartLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-open-tibia" />;
}
