import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-open-tibia');
}

export default function CustomLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-open-tibia" />;
}
