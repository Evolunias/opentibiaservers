import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-discord');
}

export default function OldSchoolTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-discord" />;
}
