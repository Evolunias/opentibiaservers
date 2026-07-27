import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-discord');
}

export default function OldSchoolTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-discord" />;
}
