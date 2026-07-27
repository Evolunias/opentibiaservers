import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-open-tibia');
}

export default function OfficialTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-open-tibia" />;
}
