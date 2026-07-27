import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-tibia');
}

export default function OfficialTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-tibia" />;
}
