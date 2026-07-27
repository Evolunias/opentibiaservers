import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-open-tibia');
}

export default function CustomTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-open-tibia" />;
}
