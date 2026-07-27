import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-open-tibia');
}

export default function ActiveLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-open-tibia" />;
}
