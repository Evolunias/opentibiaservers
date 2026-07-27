import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-open-tibia');
}

export default function NewLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-open-tibia" />;
}
