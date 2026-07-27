import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-open-tibia');
}

export default function OfficialTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-open-tibia" />;
}
