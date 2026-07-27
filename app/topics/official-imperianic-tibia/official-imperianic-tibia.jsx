import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-tibia');
}

export default function OfficialImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-tibia" />;
}
