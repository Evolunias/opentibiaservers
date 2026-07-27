import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-open-tibia');
}

export default function OfficialImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-open-tibia" />;
}
