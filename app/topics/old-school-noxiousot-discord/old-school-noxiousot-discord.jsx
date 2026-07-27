import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-discord');
}

export default function OldSchoolNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-discord" />;
}
