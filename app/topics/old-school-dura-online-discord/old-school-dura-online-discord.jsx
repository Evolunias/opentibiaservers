import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-discord');
}

export default function OldSchoolDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-discord" />;
}
