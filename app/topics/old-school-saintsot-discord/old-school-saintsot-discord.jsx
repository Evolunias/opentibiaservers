import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-discord');
}

export default function OldSchoolSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-discord" />;
}
