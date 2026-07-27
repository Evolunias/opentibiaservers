import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-discord');
}

export default function OldSchoolMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-discord" />;
}
