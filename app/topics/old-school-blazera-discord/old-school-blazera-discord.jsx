import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-discord');
}

export default function OldSchoolBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-discord" />;
}
