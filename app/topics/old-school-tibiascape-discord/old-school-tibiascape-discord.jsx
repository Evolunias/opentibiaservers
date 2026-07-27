import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-discord');
}

export default function OldSchoolTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-discord" />;
}
