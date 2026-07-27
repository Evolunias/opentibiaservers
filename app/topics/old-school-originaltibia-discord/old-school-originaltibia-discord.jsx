import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-discord');
}

export default function OldSchoolOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-discord" />;
}
