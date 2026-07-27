import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-discord');
}

export default function OldSchoolThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-discord" />;
}
