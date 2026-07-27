import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-open-tibia');
}

export default function ActiveTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-open-tibia" />;
}
