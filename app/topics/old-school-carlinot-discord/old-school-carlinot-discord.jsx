import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-discord');
}

export default function OldSchoolCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-discord" />;
}
