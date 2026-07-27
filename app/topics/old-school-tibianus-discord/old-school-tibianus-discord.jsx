import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-discord');
}

export default function OldSchoolTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-discord" />;
}
