import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-discord');
}

export default function OldSchoolTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-discord" />;
}
