import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-open-tibia');
}

export default function OfficialTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-open-tibia" />;
}
