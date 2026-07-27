import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-discord');
}

export default function OldSchoolYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-discord" />;
}
