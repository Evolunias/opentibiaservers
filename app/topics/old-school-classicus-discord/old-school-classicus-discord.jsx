import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-discord');
}

export default function OldSchoolClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-discord" />;
}
