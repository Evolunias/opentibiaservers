import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-discord');
}

export default function OldSchoolTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-discord" />;
}
