import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-official');
}

export default function OfficialTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-official" />;
}
