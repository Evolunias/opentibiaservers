import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-open-tibia');
}

export default function TibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-open-tibia" />;
}
