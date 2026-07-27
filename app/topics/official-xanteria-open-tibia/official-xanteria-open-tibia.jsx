import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-open-tibia');
}

export default function OfficialXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-open-tibia" />;
}
