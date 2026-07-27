import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-discord');
}

export default function OldSchoolTibiaServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-discord" />;
}
